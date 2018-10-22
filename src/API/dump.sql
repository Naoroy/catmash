CREATE DATABASE IF NOT EXISTS catmash;
USE catmash;

CREATE TABLE IF NOT EXISTS cat (
  id VARCHAR(20) PRIMARY KEY,
  name VARCHAR(20),
  url VARCHAR(200) NOT NULL,
  total_likes SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  week_likes SMALLINT UNSIGNED NOT NULL DEFAULT 0
);

-- INSERT INTO cat (id, name, url) value ('aefadc', 'tony', 'efaefae');
-- INSERT INTO cat (id, url) value ('acecv', 'zggnsdbgbsrt');
--
-- SELECT * FROM cat;
