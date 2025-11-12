from django.contrib import admin

from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "highlight", "order")
    list_editable = ("highlight", "order")
    search_fields = ("title", "summary")
