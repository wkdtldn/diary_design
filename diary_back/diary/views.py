from rest_framework import generics, mixins, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication


from .models import Diary
from .serializers import DiarySerializer


class DiaryProfile(APIView):
    serializer_class = DiarySerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = "user"

    def get_queryset(self, request):
        return


class DiaryDeleteView(generics.DestroyAPIView):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Diary.objects.filter(user=self.request.user)


# class DiaryDetailView(generics.RetrieveAPIView):
#     queryset = Diary.objects.all()
#     serializer_class = DiarySerializer
#     lookup_field = "user"
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [permissions.IsAuthenticated]

#     def get(self, request, *args, **kwargs):
#         return self.retrieve(request, *args, **kwargs)
