-- Atlas Bíblico-Histórico — esquema relacional proposto (SQLite compatível)
PRAGMA foreign_keys = ON;

CREATE TABLE persons (
  id TEXT PRIMARY KEY,
  canonical_name TEXT NOT NULL,
  entity_type TEXT NOT NULL DEFAULT 'person' CHECK (entity_type IN ('person','people','clan','group')),
  summary TEXT,
  notes TEXT
);

CREATE TABLE person_names (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  person_id TEXT NOT NULL REFERENCES persons(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  language TEXT,
  tradition TEXT,
  is_primary INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE sources (
  id TEXT PRIMARY KEY,
  source_type TEXT NOT NULL CHECK (source_type IN ('biblical','textual_variant','ancient','academic','reference','denominational','other')),
  title TEXT NOT NULL,
  author TEXT,
  url TEXT,
  notes TEXT
);

CREATE TABLE person_source_refs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  person_id TEXT NOT NULL REFERENCES persons(id) ON DELETE CASCADE,
  source_id TEXT NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  locator TEXT,
  claim_type TEXT DEFAULT 'attestation'
);

CREATE TABLE relationships (
  id TEXT PRIMARY KEY,
  from_person_id TEXT NOT NULL REFERENCES persons(id),
  to_person_id TEXT NOT NULL REFERENCES persons(id),
  relation_type TEXT NOT NULL CHECK (relation_type IN ('parent','mother','spouse','ancestor','genealogy','origin','other')),
  is_variant INTEGER NOT NULL DEFAULT 0,
  confidence TEXT DEFAULT 'textual',
  notes TEXT
);

CREATE TABLE relationship_source_refs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  relationship_id TEXT NOT NULL REFERENCES relationships(id) ON DELETE CASCADE,
  source_id TEXT NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  locator TEXT,
  notes TEXT
);

CREATE TABLE events (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  era TEXT,
  date_label TEXT,
  sort_year REAL,
  event_type TEXT,
  summary TEXT,
  certainty TEXT DEFAULT 'historical'
);

CREATE TABLE event_source_refs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id TEXT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  source_id TEXT NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  locator TEXT
);

CREATE TABLE event_people (
  event_id TEXT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  person_id TEXT NOT NULL REFERENCES persons(id) ON DELETE CASCADE,
  role TEXT,
  PRIMARY KEY(event_id, person_id, role)
);

CREATE TABLE traditions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  period TEXT,
  group_name TEXT,
  summary TEXT
);

CREATE TABLE tradition_edges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  from_tradition_id TEXT NOT NULL REFERENCES traditions(id),
  to_tradition_id TEXT NOT NULL REFERENCES traditions(id),
  edge_type TEXT NOT NULL CHECK (edge_type IN ('continuidade','separacao','reforma','reforma_interna','influencia','renovacao','revival','desenvolvimento','sobreposicao')),
  label TEXT,
  notes TEXT
);

CREATE TABLE rulers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  realm TEXT NOT NULL,
  period_label TEXT,
  start_year REAL,
  end_year REAL,
  notes TEXT
);

CREATE INDEX idx_names_person ON person_names(person_id);
CREATE INDEX idx_rel_from ON relationships(from_person_id);
CREATE INDEX idx_rel_to ON relationships(to_person_id);
CREATE INDEX idx_events_sort ON events(sort_year);
CREATE INDEX idx_rulers_realm ON rulers(realm);

-- v0.5: cobertura do cânon. No banco futuro, pessoas narrativas e genealógicas
-- devem convergir para `persons`; a separação BIBLICAL_FIGURES existe apenas no frontend estático.
CREATE TABLE biblical_mentions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  person_id TEXT NOT NULL REFERENCES persons(id) ON DELETE CASCADE,
  book TEXT NOT NULL,
  locator TEXT,
  narrative_role TEXT,
  is_genealogical_context INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE coverage_blocks (
  id TEXT PRIMARY KEY,
  book TEXT NOT NULL,
  scope TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('complete','complete_review','complete_core','strong','core','partial','planned')),
  detail TEXT,
  reviewed_at TEXT
);

CREATE INDEX idx_mentions_book ON biblical_mentions(book);
CREATE INDEX idx_mentions_person ON biblical_mentions(person_id);
