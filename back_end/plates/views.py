
from rest_framework import viewsets
from .models import Plate
from .serializers import PlateSerializer

class PlateViewSet(viewsets.ModelViewSet):
    queryset = Plate.objects.all()
    serializer_class = PlateSerializer


# Create your views here.
