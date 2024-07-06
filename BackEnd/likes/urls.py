# urls.py
from django.urls import path
from .views import LikeCreateAPIView, LikeListAPIView

urlpatterns = [
    path('create/', LikeCreateAPIView.as_view(), name='like_create'),
    path('', LikeListAPIView.as_view(), name='like_list'),
    # Other URL patterns
]
