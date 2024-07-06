from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Like
from .serializers import LikeSerializer
from recipes.models import Post

class LikeCreateAPIView(generics.CreateAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = [AllowAny]  # No authentication required

    def perform_create(self, serializer):
        user = self.request.data.get('user')
        post = self.request.data.get('post')
        
        # Check if the user has already liked the post
        if Like.objects.filter(user=user, post=post).exists():
            return Response({"error": "You have already liked this post."},
                            status=status.HTTP_400_BAD_REQUEST)
        
        # Increment likes count in the Post model
        post_instance = Post.objects.get(pk=post)
        post_instance.likes += 1
        post_instance.save()
        
        serializer.save()

class LikeListAPIView(generics.ListAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = [AllowAny]  # No authentication required
