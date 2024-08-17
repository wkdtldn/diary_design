from rest_framework import serializers
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
