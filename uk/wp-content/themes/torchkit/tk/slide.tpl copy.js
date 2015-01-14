<section id="{{ id }}"
         data-title="{{ title }}"
         data-slide-type="{{ type }}"
         data-slide-src="{{ src }}"
>
    <div class="thumb">
        {{# if image }}
            <img src="{{ image }}" />
        {{/ if }}
        <span class='number'>{{ number }}</span>
        {{ title }}
    </div>
    <div class="control navigate-left"></div>
    <div class="control navigate-right"></div>
    <div class="control navigate-up"></div>
    <div class="control navigate-down"></div>
    <div class="content">
        {{# if content }}
            {{ content }}
        {{/ if }}
    </div>
</section>
