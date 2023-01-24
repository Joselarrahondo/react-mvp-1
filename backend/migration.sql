DROP TABLE IF EXISTS restaurant;

CREATE TABLE restaurant (
  id SERIAL,
  name TEXT,
  foodtype TEXT, 
  address TEXT
);

INSERT INTO restaurant (name, foodtype, address) VALUES('paulins', 'mexican', '1438 W Hutchins Pl');
INSERT INTO restaurant (name, foodtype, address) VALUES('capparelli', 'italian', '9091 Fair Oaks Pkwy suite 308');
INSERT INTO restaurant (name, foodtype, address) VALUES('el poblano', 'mexican', '29202 Ralph Fair Rd');
INSERT INTO restaurant (name, foodtype, address) VALUES( 'willies grill', 'american', '24200 I-10');
INSERT INTO restaurant (name, foodtype, address) VALUES( 'santinos', 'italian', '24165 I-10 unit 433');
INSERT INTO restaurant (name, foodtype, address) VALUES( 'rudys', 'BBQ', '24152 W-I10');
INSERT INTO restaurant (name, foodtype, address) VALUES('la fogata', 'mexican', '22211 I-10');
INSERT INTO restaurant (name, foodtype, address) VALUES('north italia', 'italian', '5822 Worth Pkwy');
INSERT INTO restaurant (name, foodtype, address) VALUES('golrias', 'mexican', '17623 la Cantera Pkwy');
INSERT INTO restaurant (name, foodtype, address) VALUES( 'yard house', 'american', '15900 La Cantera Pkwy');
INSERT INTO restaurant (name, foodtype, address) VALUES( 'fralos', 'italian', '23651 W I-10');
INSERT INTO restaurant (name, foodtype, address) VALUES( 'the country line', 'BBQ', '4334 hyatt PL DR');

