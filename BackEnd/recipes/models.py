from django.db import models
from users.models import CustomUser


class Post(models.Model):
    title = models.CharField(max_length=255)
    text = models.TextField()
    picture = models.ImageField(upload_to='post_pics/', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='posts')
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.title
