from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=150)
    summary = models.TextField()
    image_url = models.URLField(blank=True)
    report_url = models.URLField(blank=True)
    external_url = models.URLField(blank=True)
    highlight = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self) -> str:
        return self.title
