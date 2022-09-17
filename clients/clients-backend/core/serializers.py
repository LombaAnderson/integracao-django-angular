from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
       model = Client
       fields = ['id', 'name', 'surname', 'phone', 'photo']

class ClientSimpleSerializer(serializers.ModelSerializer):
    class Meta:
       model = Client
       fields = ['id', 'name']
