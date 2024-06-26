from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from plates.models import Plate

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plate = models.ForeignKey(Plate, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
