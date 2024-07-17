from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Post, Comment

class UserSerialiser(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only = True)
    isAdmin = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin']

    # what we are doing below is getting more details of user from user model
    # def get_desiredfieldname(self, userobj)
    def get_name(self, obj):
        name = obj.first_name
        if (name == ''):
            name = obj.email
        return name
    
    def get_isAdmin(self, obj):
        return obj.is_staff
    
class UserSerializerWithToken(UserSerialiser):
    token = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        # as we're generating/serialising a user, we are gonna take user object and return back another token
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    
class CommentSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Comment
        fields = ['id', 'author', 'text', 'created_date', 'post']

class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'published_date', 'comments']