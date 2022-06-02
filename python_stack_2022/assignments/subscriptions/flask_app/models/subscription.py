from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

DATABASE = 'subscriptions'


class Subscription:
    def __init__(self,data):
        self.id = data['id']
        self.title = data['title']
        self.description = data['description']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls,data):
        query = "INSERT INTO subscriptions (title, description, user_id) VALUES (%(title)s,%(description)s,%(user_id)s);"
        result = connectToMySQL(DATABASE).query_db(query,data)
        return result

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM subscriptions;"
        results =  connectToMySQL(DATABASE).query_db(query)
        all_subscriptions = []
        for row in results:
            # print(row['date_made'])
            all_subscriptions.append( cls(row) )
        return all_subscriptions
    
    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM subscriptions WHERE id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query,data)
        return cls( results[0] )
    
    @classmethod
    def destroy(cls,data):
        query = "DELETE FROM subscriptions WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def validate_subscription(subscription):
        print(subscription)
        is_valid = True
        if len(subscription['title']) < 2:
            is_valid = False
            flash("Title must be at least 2 characters","subscription")
        if len(subscription['description']) < 10:
            is_valid = False
            flash("Description must be at least 10 characters","subscription")
        return is_valid
