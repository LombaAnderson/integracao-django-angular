from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import ClientViewSet
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


router = routers.DefaultRouter()
router.register(r'clients', ClientViewSet)

schema_view = get_schema_view(
   openapi.Info(
      title="Clients API",
      default_version='v1',
      description="Clients Register",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="andersonlomba172@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include(router.urls) ),
    path('swagger', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
