from rest_framework import status
from rest_framework.response import Response
from .models import Post
from rest_framework.permissions import AllowAny
from .serializers import PostSerializer
from users.models import CustomUser
from rest_framework import generics, status

class PostCreateAPIView(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]  # Adjust permissions as needed


        
        
class PostListAPIView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny] 

class UserPostsAPIView(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        if user_id:
            return Post.objects.filter(author_id=user_id)
        return Post.objects.none()
