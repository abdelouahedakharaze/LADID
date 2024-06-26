from rest_framework import viewsets
from .models import Heart
from .serializers import HeartSerializer

class HeartViewSet(viewsets.ModelViewSet):
    queryset = Heart.objects.all()
    serializer_class = HeartSerializer
