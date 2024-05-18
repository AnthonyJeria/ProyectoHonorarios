from rest_framework import serializers
from GestionApp.models import Tipo_usuario, Usuario, CeCo

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class Tipo_usuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_usuario
        fields = '__all__'  

class CeCo(serializers.ModelSerializer):
    class Meta:
        model = CeCo
        fields = '__all__'  