from django.urls import path, include
from .views import UserView, UserProfileView, DiaryListCreateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path("user/", UserProfileView.as_view(), name="user"),  # 내 정보 + 일기들 반환
    path("user/signup", UserView.as_view(), name="user-create"),
    path("user/<str:username>/", UserView.as_view(), name="user-detail"),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("diary/<int:user>/", DiaryListCreateView.as_view(), name="diary-detail"),
    path("diary/write/", DiaryListCreateView.as_view(), name="diary-create"),
]
