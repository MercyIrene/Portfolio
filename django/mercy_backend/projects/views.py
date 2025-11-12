from rest_framework import mixins, viewsets, permissions

from .models import Project
from .serializers import ProjectSerializer


class ProjectViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]
