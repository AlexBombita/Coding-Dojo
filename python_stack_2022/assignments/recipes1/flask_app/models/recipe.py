from flask_app.config.mysqlconnection import connectToMySQL

DATABASE = "recipes"

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.under_30_minutes = data['under_30_minutes']
        self.instructions = data['instructions']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # def full_name(self):
    #     return f"{self.first_name} {self.last_name}"
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL(DATABASE).query_db(query)
        recipes = []
        for u in results:
            recipes.append( cls(u) )
        return recipes

    @classmethod
    def save(cls, data):
        query = "INSERT INTO recipes (name,description,instructions) VALUES (%(name)s,%(description)s,%(instructions)s);"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def get_one(cls,data):
        query  = "SELECT * FROM recipes WHERE id = %(id)s";
        result = connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])

    @classmethod
    def update(cls,data):
        query = "UPDATE recipes SET name=%(name)s,description=%(description)s,instructions=%(instructions)s,updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)
