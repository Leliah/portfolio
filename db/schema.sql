DROP DATABASE IF EXISTS pinterest;

CREATE DATABASE pinterest;

\c pinterest;

CREATE TABLE photos (
    id SERIAL PRIMARY KEY, category TEXT DEFAULT 'fashion inspo', url TEXT, is_saved BOOLEAN DEFAULT false, name TEXT DEFAULT NULL
    ); 