from email.policy import default
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

DATABASE = 'recipes_with_favorites'

class Favorite:
    def __init__(self,data):
        self.recipe_id = data['recipe_id']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def destroy_favorite(cls,data):
        query = "DELETE FROM favorites WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def save_favorite(cls,data):
        query = "INSERT INTO favorites (recipe_id, user_id) VALUES (%(reicpe_id)s,%(user_id)s);"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result 

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM favorites;"
        results =  connectToMySQL(DATABASE).query_db(query)
        all_favorites = []
        for row in results:
            print(row['date_made'])
            all_favorites.append( cls(row) )
        return all_favorites