from django.db import models


class ContactMessage(models.Model):
    """Stores inbound portfolio contact submissions."""

    name = models.CharField(max_length=120)
    email = models.EmailField()
    message = models.TextField()
    company = models.CharField(max_length=120, blank=True)
    phone = models.CharField(max_length=40, blank=True)
    is_reviewed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self) -> str:
        return f"{self.name} ({self.email})"
