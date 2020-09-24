# Database

![ERD Diagram](docs/ERD_diagram.png)

## DB - users

  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | int | Unique identifier |
  | username | string |
  | hash | binary | 
  | user_type | string |  

## DB - clay
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | int | 
  | clay | string |  

## DB - shapes
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | int | [pk, increment]
  | shape | string |  
  
## DB - statuses
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | int |
  | status | string |  

## DB - glazes
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | int | | 
  | glaze | string |  
  
## DB - creations
  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | int |
  | clay_type | int |
  | creation_type | int |
  | status | int |
  | glaze | int |
  | weight_wet | int | 
  | weight_leather_hard | int |
  | weight_bone_dry | int |
  | weight_bisque | int |
  | weight_glaze | int |
  | weight_complete | int |
  | date_created | datetime |
  | date_complete | datetime |
  | note | string | Type of pattern/ glaze style  
