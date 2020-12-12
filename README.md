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
