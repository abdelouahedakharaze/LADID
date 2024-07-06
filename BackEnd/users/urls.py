from django.urls import path
from .views import UserCreateAPIView, UserDetailAPIView, UserListAPIView

urlpatterns = [
    path('register/', UserCreateAPIView.as_view(), name='user_register'),
    path('users/', UserListAPIView.as_view(), name='user_list'),
    path('<int:pk>/', UserDetailAPIView.as_view(), name='user_detail')
   
]
