from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User(username=validated_data["username"], email=validated_data["email"])
        user.set_password(validated_data["password"])
        user.save()
        return user


from .models import Diary


class DiarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Diary
        fields = ["id", "title", "content", "created_at", "user"]
        read_only_fields = [
            "id",
            "created_at",
            "user",
        ]
