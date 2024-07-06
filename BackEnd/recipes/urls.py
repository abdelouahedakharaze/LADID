from django.urls import path
from .views import PostCreateAPIView, PostListAPIView, UserPostsAPIView

urlpatterns = [
    path('create/', PostCreateAPIView.as_view(), name='post_create'),
    path('posts/', PostListAPIView.as_view(), name='post_list'),
    path('user/<int:user_id>/', UserPostsAPIView.as_view(), name='user_posts'),]
