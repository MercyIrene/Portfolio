from rest_framework import serializers

from .models import InterestLink


class InterestLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterestLink
        fields = ["id", "title", "description", "url", "icon", "order"]
