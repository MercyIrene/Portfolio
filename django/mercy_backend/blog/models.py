from django.db import models


class InterestLink(models.Model):
    class IconChoices(models.TextChoices):
        BOOK = "BookOpen", "Book Open"
        CHEF = "ChefHat", "Chef Hat"
        CPU = "Cpu", "CPU"

    title = models.CharField(max_length=150)
    description = models.TextField()
    url = models.URLField()
    icon = models.CharField(max_length=20, choices=IconChoices.choices, default=IconChoices.BOOK)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "title"]

    def __str__(self) -> str:
        return self.title
