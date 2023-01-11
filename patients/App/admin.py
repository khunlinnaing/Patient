from django.contrib import admin
from .models import Patient, Call
from django.utils.html import format_html
# Register your models here.
# admin.site.register(Patient)
# Patient
class PatientAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'email', 'gender', 'create_at']
    search_fields = ['name', 'phone', 'email', 'gender']
    list_per_page = 8

admin.site.register(Patient, PatientAdmin)

# SUPPORT
class CallAdmin(admin.ModelAdmin):
    list_filter = ['Situation']
    list_display = ['user', 'reason', 'option', 'created_at', 'status', '_']
    search_fields = ['user', 'reason', 'option']
    list_per_page = 8

    #Function to change the icons(One - Pending)
    def _(self, obj):
        if obj.Situation == 'Done':
            return True
        else:
            return False

    _.boolean = True

    #Function To Color the text(Done - Pending)
    def status(self, obj):
        if obj.Situation == 'Done':
            color = '#20a745'
        else:
            color = 'red'

        return format_html("<strong><p style=' color: {}'>{}</p></strong>".format(color,obj.Situation))

    status.allow_tags = True

admin.site.register(Call, CallAdmin)
