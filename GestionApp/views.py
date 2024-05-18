from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from GestionApp.serializers import UsuarioSerializer, Tipo_usuarioSerializer
from GestionApp.models import Usuario, Tipo_usuario

@csrf_exempt
def usuarioApi(request,rut=0):
    if request.method=='GET':
        usuario = Usuario.objects.all()
        usuario_serializer=UsuarioSerializer(usuario,many=True)
        return JsonResponse(usuario_serializer.data,safe=False)
    
    elif request.method=='POST':
        usuario_data=JSONParser().parse(request)
        usuario_serializer=UsuarioSerializer(data=usuario_data)
        if usuario_serializer.is_valid():
            usuario_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    
    elif request.method=='PUT':
        usuario_data=JSONParser().parse(request)
        usuario=Usuario.objects.get(rut=rut)
        usuario_serializer=UsuarioSerializer(usuario,data=usuario_data)
        if usuario_serializer.is_valid():
            usuario_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    elif request.method=='DELETE':
        usuario=Usuario.objects.get(rut=rut)
        usuario.delete()
        return JsonResponse("Deleted Successfully",safe=False)