# virtual-border-backend

# npm init

`$ npm init`

# install node module

`$ npm install`

# Install express, mysql, body-parser

`$ npm install express mysql body-parser`

# Create a database in mysql

1. Name of database: "virtual_border"
2. Create a table called "pik_golf_island" and the structure like below

- id_sensor : int(11), primary, auto_increment
- name : varchar(50)
- motion_state : int(2)
- speaker_state : int(2)
- motion_timestamp : current_timestamp() (default)
- speaker_timestamp : current_timestamp() (default)

```
INSERT INTO `pik_golf_island` (`id_sensor`, `name`, `motion_state`, `speaker_state`, `motion_timestamp`, `speaker_timestamp`)
VALUES  (NULL, 'node_1', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_2', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_3', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_4', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_5', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_6', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_7', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_8', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_9', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_10', '0', '0', current_timestamp(), current_timestamp());
```

# Create a Server file

- Create a new file and name it server.js
- Run the server file with the command `$ node server.js` in the terminal

# Create a Connection to MySQL

1. Create a Connection File

   - Create a new file and name it koneksi.js

2. Create a Response File

   - Create a new file and name it respon.js

3. Create a Controller File

   - Create a new file and name it kontroler.js

4. Create a Routes File

   - Create a new file and name it routes.js

5. Run Server
   - Run the server file with the command `$ node server.js` in the terminal

# CRUD - Read All Data

- Insert example data to database like below, and for example insert 4 times

```
INSERT INTO `pik_golf_island` (`id_sensor`, `name`, `motion_state`, `speaker_state`, `motion_timestamp`, `speaker_timestamp`)
VALUES  (NULL, 'node_1', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_2', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_3', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_4', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_5', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_6', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_7', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_8', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_9', '0', '0', current_timestamp(), current_timestamp()),
        (NULL, 'node_10', '0', '0', current_timestamp(), current_timestamp());
```

- Edit the kontroler.js and routes.js files
- Run the server file with the command `$ node server.js` in the terminal

# CRUD - Read Data by ...

1. Read Data by id_sensor

   - Edit the kontroler.js and routes.js files
   - Run the server file with the command `$ node server.js` in the terminal
   - Open browser and for example type `http://localhost:8000/tampilBerdasarkanId/1` on address bar

2. Read Data by name

   - Edit the kontroler.js and routes.js files
   - Run the server file with the command `$ node server.js` in the terminal
   - Open browser and for example type `http://localhost:8000/tampilBerdasarkanName/node_3` on address bar

3. Read Data by motion_state

   - Edit the kontroler.js and routes.js files
   - Run the server file with the command `$ node server.js` in the terminal
   - Open browser and for example type `http://localhost:8000/tampilBerdasarkanName/node_3` on address bar
