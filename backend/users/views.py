from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()

    refresh = RefreshToken.for_user(user)

    return Response({
        'message': 'User registered successfully!',
        'tokens' : {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        },
        'user': UserSerializer(user).data
    }, status=status.HTTP_201_CREATED)


