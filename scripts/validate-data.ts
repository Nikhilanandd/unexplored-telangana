/**
 * Data validation script for Unexplored Telangana location dataset.
 *
 * Usage: bun run scripts/validate-data.ts
 *
 * Checks:
 * 1. All required fields are present and non-empty
 * 2. All slugs are unique
 * 3. All categories are valid
 * 4. All district slugs are valid
 * 5. Coordinates are within Telangana bounds
 * 6. osmLink format is valid
 * 7. Arrays have at least one item
 * 8. No duplicate locations (same slug + district)
 */

import { DISTRICTS, LOCATIONS } from '../packages/config/src/index.ts'

const VALID_CATEGORIES = new Set([
  'waterfalls',
  'forts',
  'temples',
  'lakes',
  'reservoirs',
  'archaeological',
  'eco-tourism',
  'food',
  'viewpoints',
  'wildlife',
  'camping',
  'museums',
  'hidden-gems',
])

const VALID_DISTRICTS = new Set(DISTRICTS.map(d => d.slug))

// Telangana approximate bounding box
const TELANGANA_BOUNDS = {
  latMin: 15.8,
  latMax: 19.9,
  lngMin: 77.3,
  lngMax: 81.8,
}

let errors = 0
let warnings = 0

function error(msg: string) {
  console.error(`  ❌ ERROR: ${msg}`)
  errors++
}

function warn(msg: string) {
  console.warn(`  ⚠️  WARN: ${msg}`)
  warnings++
}

function info(msg: string) {
  console.log(`  ✅ ${msg}`)
}

console.log(`\n🔍 Validating ${LOCATIONS.length} locations...\n`)

// Check for duplicate slugs
const slugs = new Map<string, number[]>()
for (let i = 0; i < LOCATIONS.length; i++) {
  const loc = LOCATIONS[i]
  const key = loc.slug
  if (!slugs.has(key)) slugs.set(key, [])
  const indices = slugs.get(key)
  if (indices) indices.push(i)
}

let duplicateCount = 0
for (const [slug, indices] of slugs) {
  if (indices.length > 1) {
    error(`Duplicate slug "${slug}" at indices ${indices.join(', ')}`)
    duplicateCount++
  }
}
if (duplicateCount === 0) info('No duplicate slugs')

// Check each location
const districtCounts = new Map<string, number>()
const categoryCounts = new Map<string, number>()

for (let i = 0; i < LOCATIONS.length; i++) {
  const loc = LOCATIONS[i]
  const prefix = `[${i}] ${loc.title || 'UNTITLED'}`

  // Required fields
  if (!loc.title?.trim()) error(`${prefix}: missing or empty title`)
  if (!loc.slug?.trim()) error(`${prefix}: missing or empty slug`)
  if (!loc.district?.trim()) error(`${prefix}: missing or empty district`)
  if (!loc.category?.trim()) error(`${prefix}: missing or empty category`)
  if (!loc.description?.trim()) error(`${prefix}: missing or empty description`)
  if (!loc.bestSeason?.trim()) error(`${prefix}: missing or empty bestSeason`)
  if (!loc.accessibility?.trim()) error(`${prefix}: missing or empty accessibility`)
  if (!loc.osmLink?.trim()) error(`${prefix}: missing or empty osmLink`)

  // Coordinates
  if (!loc.coordinates) {
    error(`${prefix}: missing coordinates`)
  } else {
    const { lat, lng } = loc.coordinates
    if (typeof lat !== 'number' || typeof lng !== 'number') {
      error(`${prefix}: coordinates must be numbers`)
    } else {
      if (lat < TELANGANA_BOUNDS.latMin || lat > TELANGANA_BOUNDS.latMax) {
        warn(
          `${prefix}: latitude ${lat} outside Telangana bounds (${TELANGANA_BOUNDS.latMin}–${TELANGANA_BOUNDS.latMax})`
        )
      }
      if (lng < TELANGANA_BOUNDS.lngMin || lng > TELANGANA_BOUNDS.lngMax) {
        warn(
          `${prefix}: longitude ${lng} outside Telangana bounds (${TELANGANA_BOUNDS.lngMin}–${TELANGANA_BOUNDS.lngMax})`
        )
      }
    }
  }

  // Category
  if (loc.category && !VALID_CATEGORIES.has(loc.category)) {
    error(`${prefix}: invalid category "${loc.category}"`)
  }

  // District
  if (loc.district && !VALID_DISTRICTS.has(loc.district)) {
    error(`${prefix}: invalid district slug "${loc.district}"`)
  }

  // Arrays
  if (loc.travelTips && loc.travelTips.length === 0) {
    warn(`${prefix}: travelTips is empty`)
  }
  if (loc.nearbyAttractions && loc.nearbyAttractions.length === 0) {
    warn(`${prefix}: nearbyAttractions is empty`)
  }

  // OSM link format
  if (loc.osmLink && !loc.osmLink.startsWith('https://www.openstreetmap.org/')) {
    warn(`${prefix}: osmLink doesn't match expected format`)
  }

  // Count districts and categories
  if (loc.district) {
    districtCounts.set(loc.district, (districtCounts.get(loc.district) || 0) + 1)
  }
  if (loc.category) {
    categoryCounts.set(loc.category, (categoryCounts.get(loc.category) || 0) + 1)
  }
}

// Check coverage
console.log('\n📊 Coverage Summary:\n')
console.log(`  Total locations: ${LOCATIONS.length}`)
console.log(`  Districts covered: ${districtCounts.size}/33`)
console.log(`  Categories used: ${categoryCounts.size}/13`)

// Districts with no locations
const missingDistricts = [...VALID_DISTRICTS].filter(d => !districtCounts.has(d))
if (missingDistricts.length > 0) {
  warn(`Districts with no locations: ${missingDistricts.join(', ')}`)
}

// Districts with few locations
const lowDistricts = [...districtCounts.entries()]
  .filter(([, count]) => count < 2)
  .sort((a, b) => a[1] - b[1])
if (lowDistricts.length > 0) {
  console.log('\n  Districts with fewer than 2 locations:')
  for (const [d, c] of lowDistricts) console.log(`    ${d}: ${c}`)
}

// Category distribution
console.log('\n  Category distribution:')
const sortedCategories = [...categoryCounts.entries()].sort((a, b) => b[1] - a[1])
for (const [c, n] of sortedCategories) console.log(`    ${c}: ${n}`)

// Summary
console.log(`\n${'='.repeat(50)}`)
if (errors > 0) {
  console.error(`\n❌ Validation FAILED: ${errors} error(s), ${warnings} warning(s)`)
  process.exit(1)
} else {
  console.log(`\n✅ Validation PASSED: ${warnings} warning(s)`)
  process.exit(0)
}
