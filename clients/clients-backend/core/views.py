from rest_framework import viewsets
from .models import Client
from .serializers import ClientSerializer, ClientSimpleSerializer
from rest_framework.response import Response

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

def list(self, request, *args, **kwargs):
    queryset = Client.objects.all()
    serializer = ClientSimpleSerializer(queryset, many=True)
    return Response(serializer.data)


