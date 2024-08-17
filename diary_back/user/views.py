from django.shortcuts import render
from rest_framework import generics, mixins, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from rest_framework_simplejwt.authentication import JWTAuthentication

from django.contrib.auth import get_user_model
from .serializers import UserSerializer, DiarySerializer
from .models import Diary

User = get_user_model()


class UserView(
    mixins.CreateModelMixin, mixins.RetrieveModelMixin, generics.GenericAPIView
):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "username"

    def get_permissions(self):
        if self.request.method == "POST":
            self.permission_classes = [permissions.AllowAny]
        elif self.request.method == "GET":
            self.authentication_classes = [JWTAuthentication]
            self.permission_classes = [permissions.IsAuthenticated]
        return super().get_permissions()

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


class UserProfileView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        user_serializer = UserSerializer(user)

        diaries = Diary.objects.filter(user=user)
        diary_serializer = DiarySerializer(diaries, many=True)

        response_data = {"user": user_serializer.data, "diaries": diary_serializer.data}

        return Response(response_data)


class DiaryListCreateView(generics.ListCreateAPIView):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer
    lookup_field = "user"
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.kwargs.get("user")
        return Diary.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
