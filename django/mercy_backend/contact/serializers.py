from rest_framework import serializers

from .models import ContactMessage


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id", "name", "email", "company", "phone", "message", "is_reviewed", "created_at"]
        read_only_fields = ["id", "is_reviewed", "created_at"]
