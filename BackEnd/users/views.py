from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework.response import Response
from django.contrib.auth import authenticate

class UserCreateAPIView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]

class UserListAPIView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]

class UserDetailAPIView(generics.RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
