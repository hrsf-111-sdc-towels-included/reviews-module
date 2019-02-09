

CREATE DATABASE reviewsData

use reviewsData;

CREATE TABLE Homes (
    id INT NOT NULL AUTO_INCREMENT = 100,
    name VARCHAR(150) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Authors (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(42) NOT NULL,
    img_url VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE Reviews (
    id INT NOT NULL AUTO_INCREMENT,
    author_id INT NOT NULL,
    home_id INT NOT NULL,
    accuracy INT NOT NULL,
    communication INT NOT NULL,
    cleanliness INT NOT NULL,
    location INT NOT NULL,
    check_in INT NOT NULL,
    value INT NOT NULL,
    complaints BOOLEAN,
    comment VARCHAR(500),
    created_at date,
    PRIMARY KEY (id),
)

INSERT INTO Homes (name) values ('7072 Tarkiln Hill Street
Stow, OH 44224');
INSERT INTO Homes (name) values ('9483 W. Bayport Street
Richmond, VA 23223');
INSERT INTO Homes (name) values ('22 Bedford St.
Braintree, MA 02184');
INSERT INTO Homes (name) values ('7847 N. Foxrun Ave.
Pittsfield, MA 01201');
INSERT INTO Homes (name) values ('746 Arch St.
Hattiesburg, MS 39401');
INSERT INTO Homes (name) values ('422 Shore St.
Lutherville Timonium, MD 21093');
INSERT INTO Homes (name) values ('388 Fifth Drive
Powder Springs, GA 30127');
INSERT INTO Homes (name) values ('8036 Lafayette Court
Camp Hill, PA 17011');
INSERT INTO Homes (name) values ('6 Young Ave.
North Kingstown, RI 02852');
INSERT INTO Homes (name) values ('82 Cardinal Court
The Villages, FL 32162');
INSERT INTO Homes (name) values ('7892 Locust Avenue
Oak Park, MI 48237');
INSERT INTO Homes (name) values ('624 Fordham Lane
Logansport, IN 46947');
INSERT INTO Homes (name) values ('87 Madison Drive
Port Richey, FL 34668');
INSERT INTO Homes (name) values ('63 North Del Monte St.
West Chicago, IL 60185');
INSERT INTO Homes (name) values ('7290 West Lancaster Ave.
Bartlett, IL 60103');
INSERT INTO Homes (name) values ('72 Spring Ave.
North Canton, OH 44720');
INSERT INTO Homes (name) values ('542 Heather Street
New Bern, NC 28560');
INSERT INTO Homes (name) values ('1 Miles Ave.
Wyandotte, MI 48192');
INSERT INTO Homes (name) values ('8331 Creekside Dr.
Carmel, NY 10512
');
INSERT INTO Homes (name) values ('7358 North Glendale Drive
Augusta, GA 30906');
INSERT INTO Homes (name) values ('9577 Pendergast Lane
Prior Lake, MN 55372');
INSERT INTO Homes (name) values ('794 Cedar Swamp St.
Ankeny, IA 50023');
INSERT INTO Homes (name) values ('97 West Galvin Street
Rockledge, FL 32955');
INSERT INTO Homes (name) values ('771 S. Marshall Drive
Downers Grove, IL 60515');
INSERT INTO Homes (name) values ('966 Gainsway Street
Salem, MA 01970');
INSERT INTO Homes (name) values ('664 S. Summit Road
Lansing, MI 48910');
INSERT INTO Homes (name) values ('9157 Proctor Drive
Upper Darby, PA 19082');
INSERT INTO Homes (name) values ('9142 Armstrong Ave.
Port Charlotte, FL 33952');
INSERT INTO Homes (name) values ('712 Sulphur Springs St.
Southgate, MI 48195');
INSERT INTO Homes (name) values ('91 Arrowhead Dr.
Wausau, WI 54401');
INSERT INTO Homes (name) values ('154 Gonzales Court
Lititz, PA 17543');
INSERT INTO Homes (name) values ('21 Third Dr.
Buffalo, NY 14215');
INSERT INTO Homes (name) values ('97 S. Grant St.
Hopewell Junction, NY 12533');
INSERT INTO Homes (name) values ('689 West Smoky Hollow Drive
New Rochelle, NY 10801');
INSERT INTO Homes (name) values ('98 Lees Creek St.
Collegeville, PA 19426');
INSERT INTO Homes (name) values ('2 Winchester Dr.
Delaware, OH 43015');
INSERT INTO Homes (name) values ('650 Cedar Ave.
Grand Forks, ND 58201');
INSERT INTO Homes (name) values ('433 Peninsula Lane
Loxahatchee, FL 33470');
INSERT INTO Homes (name) values ('7084 County Street
Pleasanton, CA 94566');
INSERT INTO Homes (name) values ('56 Marvon Court
Traverse City, MI 49684');
INSERT INTO Homes (name) values ('67 North Pheasant St.
Reno, NV 89523');
INSERT INTO Homes (name) values ('8522 Pumpkin Hill Drive
Owensboro, KY 42301');
INSERT INTO Homes (name) values ('182 Sierra Court
Tullahoma, TN 37388');
INSERT INTO Homes (name) values ('9 Berkshire Street
Hightstown, NJ 08520');
INSERT INTO Homes (name) values ('8637 E. Griffin Drive
Bluffton, SC 29910');
INSERT INTO Homes (name) values ('22 West Vernon Rd.
Ithaca, NY 14850
');
INSERT INTO Homes (name) values ('38 East Oakwood Dr.
Roswell, GA 30075');
INSERT INTO Homes (name) values ('670 Pilgrim Drive
Richmond Hill, NY 11418');
INSERT INTO Homes (name) values ('5 Tunnel Ave.
Dubuque, IA 52001');
INSERT INTO Homes (name) values ('54 Wall Street
Bridgeton, NJ 08302
');
INSERT INTO Homes (name) values ('54 Young Lane
Saint Johns, FL 32259');
INSERT INTO Homes (name) values ('574 Gulf Lane
Opa Locka, FL 33054');
INSERT INTO Homes (name) values ('82 Walt Whitman St.
Port Chester, NY 10573
');
INSERT INTO Homes (name) values ('9525 Gonzales St.
Huntington Station, NY 11746');
INSERT INTO Homes (name) values ('8527 Border St.
Flushing, NY 11354');
INSERT INTO Homes (name) values ('97 Laurel Ave.
Pompano Beach, FL 33060');
INSERT INTO Homes (name) values ('8535 West King Street
Mechanicsville, VA 23111
');
INSERT INTO Homes (name) values ('80 Longbranch Rd.
Lincoln Park, MI 48146');
INSERT INTO Homes (name) values ('3 Glen Eagles St.
Oak Lawn, IL 60453');
INSERT INTO Homes (name) values ('7899 River Street
Lanham, MD 20706');
INSERT INTO Homes (name) values ('93 Pierce Dr.
Conyers, GA 30012');
INSERT INTO Homes (name) values ('2 Franklin Dr.
Wethersfield, CT 06109');
INSERT INTO Homes (name) values ('726 Peg Shop Lane
Libertyville, IL 60048');
INSERT INTO Homes (name) values ('94 Wintergreen Ave.
West Roxbury, MA 02132');
INSERT INTO Homes (name) values ('758 Snake Hill Ave.
Watertown, MA 02472');
INSERT INTO Homes (name) values ('6 Second Street
Astoria, NY 11102');
INSERT INTO Homes (name) values ('53 Bay Meadows St.
Helotes, TX 78023');
INSERT INTO Homes (name) values ('8396 Rockledge Street
Tewksbury, MA 01876
');
INSERT INTO Homes (name) values ('7972 South Division St.
Newburgh, NY 12550');
INSERT INTO Homes (name) values ('881 Beech St.
Milledgeville, GA 31061');
INSERT INTO Homes (name) values ('7074 West Beach Court
Sugar Land, TX 77478');
INSERT INTO Homes (name) values ('9628 Newcastle St.
Newark, NJ 07103');
INSERT INTO Homes (name) values ('159 W. Leatherwood Ave.
Piscataway, NJ 08854');
INSERT INTO Homes (name) values ('419 W. Woodsman Court
Lewis Center, OH 43035');
INSERT INTO Homes (name) values ('8813 Ivy St.
Revere, MA 02151');
INSERT INTO Homes (name) values ('309 South Jockey Hollow Street
Park Ridge, IL 60068');
INSERT INTO Homes (name) values ('81 W. Peninsula St.
Groton, CT 06340');
INSERT INTO Homes (name) values ('862 Selby St.
Endicott, NY 13760');
INSERT INTO Homes (name) values ('941 E. Creekside Lane
Henrico, VA 23228');
INSERT INTO Homes (name) values ('7536 Leatherwood Street
Onalaska, WI 54650');
INSERT INTO Homes (name) values ('4 Livingston Street
New Haven, CT 06511');
INSERT INTO Homes (name) values ('9313 Richardson Lane
Royal Oak, MI 48067');
INSERT INTO Homes (name) values ('3 N. Arcadia St.
Bettendorf, IA 52722');
INSERT INTO Homes (name) values ('224 Thatcher St.
Casselberry, FL 32707');
INSERT INTO Homes (name) values ('9926 Shore Street
Homestead, FL 33030');
INSERT INTO Homes (name) values ('9858 High Street
Bedford, OH 44146');
INSERT INTO Homes (name) values ('9060 Jones Drive
Depew, NY 14043');
INSERT INTO Homes (name) values ('45 Pulaski St.
Philadelphia, PA 19111
');
INSERT INTO Homes (name) values ('9107 North Pineknoll Ave.
Baltimore, MD 21206');
INSERT INTO Homes (name) values ('45 Bald Hill Road
North Bergen, NJ 07047');
INSERT INTO Homes (name) values ('9568 Buttonwood Street
Defiance, OH 43512');
INSERT INTO Homes (name) values ('829 Bald Hill Ave.
Lake Villa, IL 60046');
INSERT INTO Homes (name) values ('8482 Bridle Ave.
Kernersville, NC 27284');
INSERT INTO Homes (name) values ('9580 Summit St.
Maspeth, NY 11378');
INSERT INTO Homes (name) values ('9777 Cedar Swamp Drive
Hobart, IN 46342');
INSERT INTO Homes (name) values ('8350 NE. Hawthorne Dr.
Davenport, IA 52804');
INSERT INTO Homes (name) values ('637 Fairway St.
Goshen, IN 46526');
INSERT INTO Homes (name) values ('742 E. Mill Street
Allentown, PA 18102');
INSERT INTO Homes (name) values ('543 Smoky Hollow St.
Wappingers Falls, NY 12590');
INSERT INTO Homes (name) VALUES (`10 Linda Lane
Manchester, NH 03102`);
