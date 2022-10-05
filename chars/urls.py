from django.conf.urls import url, include
from django.views.generic import ListView, DetailView
from chars.models import Character
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static


urlpatterns = [ 
                url(r'^$', ListView.as_view(
                                    queryset=Character.objects.all(),
                                    template_name="chars/chars.html")),

                url(r'^(?P<pk>\d+)', DetailView.as_view(
                                    model = Character,
                                    template_name="chars/Character_detail.html"),
                                    name='Character-detail'),
            ]
if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns() + static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
