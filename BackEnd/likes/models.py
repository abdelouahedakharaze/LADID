# likes/models.py
from django.db import models
from recipes.models import Post  
from users.models import CustomUser  #

class Like(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='likes')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post_likes')  
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'post')  

    def __str__(self):
        return f'{self.user.username} likes {self.post.title}'
