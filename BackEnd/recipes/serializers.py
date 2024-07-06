
from rest_framework import serializers

from users.models import CustomUser
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = Post
        fields = ('id', 'title', 'text', 'picture', 'created_at', 'author', 'likes')
