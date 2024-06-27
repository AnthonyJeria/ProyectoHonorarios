from rest_framework import serializers
from GestionApp.models import Tipo_usuario, Usuario, CeCo, prestadorServicios

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class Tipo_usuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_usuario
        fields = '__all__'  

class CeCoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CeCo
        fields = '__all__'  

class prestadorServiciosSerializer(serializers.ModelSerializer):
    class Meta:
        model = prestadorServicios
        fields = '__all__'  