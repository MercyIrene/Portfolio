from django.contrib import admin

from .models import InterestLink


@admin.register(InterestLink)
class InterestLinkAdmin(admin.ModelAdmin):
    list_display = ("title", "icon", "is_active", "order")
    list_editable = ("is_active", "order")
    search_fields = ("title", "description")
