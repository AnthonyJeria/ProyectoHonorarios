from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from GestionApp.serializers import UsuarioSerializer, Tipo_usuarioSerializer, CeCoSerializer, prestadorServiciosSerializer, boletaSerializer
from GestionApp.models import Usuario, Tipo_usuario, CeCo, prestadorServicios, boleta

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
    
@csrf_exempt
def cecoApi(request,num_CeCo=0):
    if request.method=='GET':
        ceco = CeCo.objects.all()
        cecoSerializer=CeCoSerializer(ceco,many=True)
        return JsonResponse(cecoSerializer.data,safe=False)
    
    elif request.method=='POST':
        ceco_data=JSONParser().parse(request)
        cecoSerializer=CeCoSerializer(data=ceco_data)
        if cecoSerializer.is_valid():
            cecoSerializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    
    elif request.method=='PUT':
        ceco_data=JSONParser().parse(request)
        ceco=CeCo.objects.get(num_CeCo=num_CeCo)
        cecoSerializer=CeCoSerializer(ceco,data=ceco_data)
        if cecoSerializer.is_valid():
            cecoSerializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    elif request.method=='DELETE':
        ceco=CeCo.objects.get(num_CeCo=num_CeCo)
        ceco.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    
@csrf_exempt
def prestadorApi(request,rutPrestador=0):
    if request.method=='GET':
        prestador = prestadorServicios.objects.all()
        prestadorSerializer=prestadorServiciosSerializer(prestador,many=True)
        return JsonResponse(prestadorSerializer.data,safe=False)
    
    elif request.method=='POST':
        prestador_data=JSONParser().parse(request)
        prestadorSerializer=prestadorServiciosSerializer(data=prestador_data)
        if prestadorSerializer.is_valid():
            prestadorSerializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    
    elif request.method=='PUT':
        prestador_data=JSONParser().parse(request)
        prestador=prestadorServicios.objects.get(rutPrestador=rutPrestador)
        prestadorSerializer=prestadorServiciosSerializer(prestador,data=prestador_data)
        if prestadorSerializer.is_valid():
            prestadorSerializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    elif request.method=='DELETE':
        prestador=prestadorServicios.objects.get(rutPrestador=rutPrestador)
        prestador.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    
@csrf_exempt
def boletaApi(request,rutPrest=0):
    if request.method=='GET':
        bol = boleta.objects.all()
        bolSerializer=boletaSerializer(bol,many=True)
        return JsonResponse(bolSerializer.data,safe=False)
    
    elif request.method=='POST':
        boleta_data=JSONParser().parse(request)
        bolSerializer=boletaSerializer(data=boleta_data)
        if bolSerializer.is_valid():
            bolSerializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    
    elif request.method=='PUT':
        boleta_data=JSONParser().parse(request)
        bol=boleta.objects.get(rutPrest=rutPrest)
        bolSerializer=boletaSerializer(bol,data=boleta_data)
        if bolSerializer.is_valid():
            bolSerializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    elif request.method=='DELETE':
        bol=boleta.objects.get(rutPrest=rutPrest)
        bol.delete()
        return JsonResponse("Deleted Successfully",safe=False)