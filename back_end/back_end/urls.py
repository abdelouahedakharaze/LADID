"""
URL configuration for back_end project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users import views as user_views
from plates import views as plate_views
from comments import views as comment_views
from hearts import views as heart_views
from followers import views as follower_views

router = DefaultRouter()
router.register(r'users', user_views.UserViewSet)
router.register(r'profiles', user_views.ProfileViewSet)
router.register(r'plates', plate_views.PlateViewSet)
router.register(r'comments', comment_views.CommentViewSet)
router.register(r'hearts', heart_views.HeartViewSet)
router.register(r'follows', follower_views.FollowViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include(router.urls)),

]
