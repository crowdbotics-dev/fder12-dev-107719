from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ASdsfViewSet,FjfjfViewSet,ASdsfViewSet,FjfjfViewSet,ASdsfViewSet,FjfjfViewSet,ASdsfViewSet,FjfjfViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('asdsf', ASdsfViewSet )
router.register('fjfjf', FjfjfViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
