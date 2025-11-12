from rest_framework import mixins, viewsets, permissions

from .models import InterestLink
from .serializers import InterestLinkSerializer


class InterestLinkViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = InterestLink.objects.filter(is_active=True).order_by("order")
    serializer_class = InterestLinkSerializer
    permission_classes = [permissions.AllowAny]
