from django.conf import settings
from django.core.mail import send_mail
from rest_framework import mixins, permissions, viewsets

from .models import ContactMessage
from .serializers import ContactMessageSerializer


class ContactMessageViewSet(mixins.CreateModelMixin,
                            mixins.ListModelMixin,
                            viewsets.GenericViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def get_permissions(self):
        if self.action in ("list", "retrieve"):
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        contact_message = serializer.save()
        subject = f"Portfolio Inquiry from {contact_message.name}"
        body = contact_message.message
        recipient_list = [settings.DEFAULT_FROM_EMAIL]
        reply_to = [contact_message.email]
        send_mail(
            subject=subject,
            message=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=recipient_list,
            fail_silently=True,
            reply_to=reply_to,
        )
